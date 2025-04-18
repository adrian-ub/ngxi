import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSlotMachineIcon],svg[openmoji-slot-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" d="M12.08 19.86h44.95v32.27H12.08z"></svg:path><svg:path fill="none" stroke="#9b9b9a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.305" d="M13.23 22.52h42.64m-42.64 27.2h42.64"></svg:path><svg:circle cx="62.73" cy="30.73" r="2.593" fill="#ea5a47"></svg:circle><svg:path fill="#d22f27" d="M64.01 28.68a2.59 2.59 0 0 1-3.579 3.579a2.592 2.592 0 1 0 3.579-3.579"></svg:path><svg:g fill="none" stroke="#000"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.305" d="M13.23 19.86h42.64"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.08 52.14V19.86"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4.007" d="M55.95 52.14h-42.8m0-32.28h42.8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.06 19.86v32.28m14.98-32.28v32.28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.916" d="M57.273 47.67h5.637"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M62.91 47.42V34"></svg:path><svg:circle cx="62.91" cy="30.73" r="2.593" stroke-miterlimit="10" stroke-width="1.297"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.3 35.69V33.7h4.54l-2.81 8.07m13.25-10.54v-1.99h4.54l-2.8 8.06m13.24-1.61V33.7h4.54L49 41.77m8.02-21.91v32.28"></svg:path></svg:g><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.3 35.69V33.7h4.54l-2.81 8.07m13.25-10.54v-1.99h4.54l-2.8 8.06m13.24-1.61V33.7h4.54L49 41.77"></svg:path>`,
})
export class OpenmojiSlotMachineIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
