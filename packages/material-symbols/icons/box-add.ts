import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBoxAddIcon],svg[material-symbols-box-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675v4.9q-.475-.175-.975-.288T19 11.026q-.825 0-1.588.188T16 11.8V8H8v8l4-2l1.45.725q-.2.525-.325 1.088T13 16.975q0 1.125.4 2.163T14.55 21zm13 0v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5.4 6h13.2l-.85-1H6.25z"></svg:path>`,
})
export class MaterialSymbolsBoxAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
