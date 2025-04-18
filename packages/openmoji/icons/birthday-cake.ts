import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBirthdayCakeIcon],svg[openmoji-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M11 37c0 1.105 50 2.105 50 1v-7h-1V20a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5v11h-1z"></svg:path><svg:path fill="#FFF" d="M12 21.924a5 5 0 0 1 6.321.612a5 5 0 0 0 7.073 0a5 5 0 0 1 7.07 0a5 5 0 0 0 7.072 0a5 5 0 0 1 7.07 0a5 5 0 0 0 7.073 0A5 5 0 0 1 60 21.924V20a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5z"></svg:path><svg:path fill="#fcea2b" d="M5 60a2 2 0 0 0 2 2h58a2 2 0 0 0 2-2V41a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5z"></svg:path><svg:circle cx="36" cy="12" r="3" fill="#ea5a47"></svg:circle><svg:path fill="#FFF" d="M11.251 45.536a5 5 0 0 0 7.07 0a5 5 0 0 1 7.073 0a5 5 0 0 0 7.07 0a5 5 0 0 1 7.072 0a5 5 0 0 0 7.07 0a5 5 0 0 1 7.073 0a5 5 0 0 0 7.07 0A5 5 0 0 1 67 44.877V41a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v3.877a5 5 0 0 1 6.251.66"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="12" r="3"></svg:circle><svg:path d="M36 10.75a5 5 0 0 1 5-5M11.251 45.536a5 5 0 0 0 7.07 0a5 5 0 0 1 7.073 0a5 5 0 0 0 7.07 0a5 5 0 0 1 7.072 0a5 5 0 0 0 7.07 0a5 5 0 0 1 7.073 0a5 5 0 0 0 7.07 0A5 5 0 0 1 67 44.877V41a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v3.877a5 5 0 0 1 6.251.66"></svg:path><svg:path d="M5 44.877V60a2 2 0 0 0 2 2h58a2 2 0 0 0 2-2V44.877"></svg:path><svg:path d="M11.251 45.536a5 5 0 0 0 7.07 0a5 5 0 0 1 7.073 0a5 5 0 0 0 7.07 0a5 5 0 0 1 7.072 0a5 5 0 0 0 7.07 0a5 5 0 0 1 7.073 0a5 5 0 0 0 7.07 0A5 5 0 0 1 67 44.877V41a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v3.877a5 5 0 0 1 6.251.66M60 21.924V32M12 21.924V32m0-10.076a5 5 0 0 1 6.321.612a5 5 0 0 0 7.073 0a5 5 0 0 1 7.07 0a5 5 0 0 0 7.072 0a5 5 0 0 1 7.07 0a5 5 0 0 0 7.073 0A5 5 0 0 1 60 21.924V20a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5z"></svg:path></svg:g>`,
})
export class OpenmojiBirthdayCakeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
