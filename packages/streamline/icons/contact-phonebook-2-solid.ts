import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineContactPhonebook2SolidIcon],svg[streamline-contact-phonebook-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.132.063H3.046A2.18 2.18 0 0 0 .869 2.18v9.574a2.177 2.177 0 0 0 2.177 2.175h9.037a.75.75 0 0 0 0-1.5h-.2V10.9a1.7 1.7 0 0 0 .95-1.527v-7.61A1.7 1.7 0 0 0 11.132.062ZM2.567 12.23a.677.677 0 0 1 .479-1.155h7.336v1.354H3.046a.68.68 0 0 1-.48-.199Zm6.01-3.906a1.7 1.7 0 0 1-1.053-.089a9.55 9.55 0 0 1-3.278-3.278A1.71 1.71 0 0 1 4.708 3l.246-.246a.533.533 0 0 1 .732-.096l.796.796a.533.533 0 0 1-.096.732a.533.533 0 0 0-.095.732L7.563 6.19a.533.533 0 0 0 .732-.095A.533.533 0 0 1 9.027 6l.796.795a.533.533 0 0 1-.096.732l-.246.247a1.7 1.7 0 0 1-.903.55Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineContactPhonebook2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
