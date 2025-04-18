import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelbattleaxeIcon],svg[whh-pixelbattleaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 576v-64h64v-64H640v-64h64v-64h64v-64h64v-64h64v128h64v-64h64v320zm256-192H832v128h128zm0-256v64h-64v-64zm-64-64V0h128v128h-64V64zm-64 64V64h64v64zm-64 64v64h-64v64h-64v64h-64V256h-64v64h-64V0h320v64h-64v64h128v64zM640 64H512v128h128zM448 512v-64h64v-64h64v64h64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64zM128 896H64v64h64z"></svg:path>`,
})
export class WhhPixelbattleaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
