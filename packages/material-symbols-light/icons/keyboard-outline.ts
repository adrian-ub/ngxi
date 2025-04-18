import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardOutlineIcon],svg[material-symbols-light-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 18q-.691 0-1.153-.462T3 16.384V7.616q0-.691.463-1.153T4.615 6h14.77q.69 0 1.152.463T21 7.616v8.769q0 .69-.463 1.153T19.385 18zm0-1h14.769q.23 0 .423-.192t.192-.424V7.616q0-.231-.192-.424T19.385 7H4.615q-.23 0-.423.192T4 7.616v8.769q0 .23.192.423t.423.192m3.616-1.23h7.538v-1.54H8.231zm-3-3h1.538v-1.54H5.231zm3 0h1.538v-1.54H8.231zm3 0h1.538v-1.54h-1.538zm3 0h1.538v-1.54h-1.538zm3 0h1.538v-1.54h-1.538zm-12-3h1.538V8.23H5.231zm3 0h1.538V8.23H8.231zm3 0h1.538V8.23h-1.538zm3 0h1.538V8.23h-1.538zm3 0h1.538V8.23h-1.538zM4 17V7z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
