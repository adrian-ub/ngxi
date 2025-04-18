import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSimCardIcon],svg[material-symbols-light-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18.616h1v-1.424h-1zm0-3.808h1v-3.423h-1zm4 3.808h1v-3.424h-1zm0-5.808h1v-1.423h-1zm4 5.808h1v-1.424h-1zm0-3.808h1v-3.423h-1zM6.616 21q-.691 0-1.153-.462T5 19.385V8.423L10.423 3h6.962q.69 0 1.153.463T19 4.615v14.77q0 .69-.462 1.152T17.384 21z"></svg:path>`,
})
export class MaterialSymbolsLightSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
