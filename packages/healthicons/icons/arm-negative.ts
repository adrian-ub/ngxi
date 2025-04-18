import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsArmNegativeIcon],svg[healthicons-arm-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsArmNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM4 27v10h9.053c1.29 0 2.57-.208 3.794-.616L21 35h1.343a4 4 0 0 0 2.829-1.172L26 33l2.147-.859a12 12 0 0 0 4.806-3.513L38 22.5l5-3l1-7l-.083-.062a2 2 0 0 0-2.989.705L40 15l-2 1.5l.712-.978a2 2 0 0 0-.345-2.72L38 12.5l-3.123 3.904a4 4 0 0 0-.877 2.5V21l-5.282 1.668a12 12 0 0 0-6.562 5.083L22 28l-2.567-.642a12 12 0 0 0-2.91-.358z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsArmNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsArmNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
