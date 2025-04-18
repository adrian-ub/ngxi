import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUserManualFilledIcon],svg[ix-user-manual-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 106.664c0-35.346 28.654-64 64-64h277.334v320H149.333c-11.782 0-21.333 9.551-21.333 21.333v21.334c0 11.782 9.551 21.333 21.333 21.333h256v-42.667h21.334v85.334H149.333c-35.346 0-64-28.654-64-64zM256 191.997v85.334h42.667v-85.334zm42.667-42.666c0 11.782-9.552 21.333-21.334 21.333S256 161.113 256 149.331s9.551-21.334 21.333-21.334s21.334 9.552 21.334 21.334M384 383.997H149.333v21.334H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserManualFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
