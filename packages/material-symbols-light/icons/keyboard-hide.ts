import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardHideIcon],svg[material-symbols-light-keyboard-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.846L8.923 18.77h6.154zM4.616 16q-.691 0-1.153-.462T3 14.385v-8.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v8.769q0 .69-.463 1.153T19.385 16zm3.615-2.23h7.538v-1.54H8.231zm-3-3h1.538V9.23H5.231zm3 0h1.538V9.23H8.231zm3 0h1.538V9.23h-1.538zm3 0h1.538V9.23h-1.538zm3 0h1.538V9.23h-1.538zm-12-3h1.538V6.23H5.231zm3 0h1.538V6.23H8.231zm3 0h1.538V6.23h-1.538zm3 0h1.538V6.23h-1.538zm3 0h1.538V6.23h-1.538z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
