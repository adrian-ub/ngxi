import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelpotionIcon],svg[whh-pixelpotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 896v64h-64v64H128v-64H64v-63H0V577h64v-64h64v-64h64v-64h-64v-63h512v63h-64v64h64v64h64v64h64v320h-64zM128 768h64V640h-64zm512-256H512V384H256v128H128v64h512zm0 256h-64v64h-64v64h64v-64h64zM64 192h64v128H64zm640 0v128h-64V192zm-128 64H192v-64h-64v-64h64V65h64v128h256V65h64v63h64v64h-64zM256 0h256v64H256z"></svg:path>`,
})
export class WhhPixelpotionIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
