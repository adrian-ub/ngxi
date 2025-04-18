import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNorthIcon],svg[openmoji-north-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M49.153 32.349v1.992l-13.305-7.649l-13.306 7.649v-1.992L35.848 8.288z"></svg:path><svg:path fill="#d22f27" d="m22.542 32.349l13.166-11.202l13.445 11.202v1.992l-13.305-7.649l-13.306 7.649z"></svg:path><svg:path fill="#9b9b9a" d="M47.822 40.572v22.014a.89.89 0 0 1-.932.86h-9.536a1.54 1.54 0 0 1-1.291-.86L30.54 46.882v15.704a.89.89 0 0 1-.932.86h-4.876a.83.83 0 0 1-.86-.86V40.572a.83.83 0 0 1 .86-.86h9.537a1.66 1.66 0 0 1 1.362.86l5.522 15.919V40.572a.83.83 0 0 1 .86-.86h4.876a.89.89 0 0 1 .932.86"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M47.822 40.572v22.014a.89.89 0 0 1-.932.86h-9.536a1.54 1.54 0 0 1-1.291-.86l-5.64-15.704h-.541l.66 15.703a.89.89 0 0 1-.933.861h-4.876a.83.83 0 0 1-.86-.86V40.572a.83.83 0 0 1 .86-.86h9.537a1.66 1.66 0 0 1 1.362.86l5.39 15.919h.462l-.33-15.919a.83.83 0 0 1 .86-.86h4.876a.89.89 0 0 1 .932.86Zm1.331-8.223v1.992l-13.305-7.649l-13.306 7.649v-1.992L35.848 8.288z"></svg:path>`,
})
export class OpenmojiNorthIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
