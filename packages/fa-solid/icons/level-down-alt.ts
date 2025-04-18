import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLevelDownAltIcon],svg[fa-solid-level-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.553 392.331L209.587 504.334c-9.485 10.214-25.676 10.229-35.174 0L70.438 392.331C56.232 377.031 67.062 352 88.025 352H152V80H68.024a12 12 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v328h63.966c20.878 0 31.851 24.969 17.587 40.331"></svg:path>`,
})
export class FaSolidLevelDownAltIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
