import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCoffeeGrinderIcon],svg[openmoji-coffee-grinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M38.877 53.905v-13h15.33v9z"></svg:path><svg:path fill="#a57939" d="M40.157 19.908h12.855c.662 0 1.199.532 1.199 1.189v20.849H38.76V21.29a1.39 1.39 0 0 1 1.395-1.383Z"></svg:path><svg:path fill="#6a462f" fill-rule="evenodd" d="m38.982 54.113l-.074 3.339c0 1.104.237 1.613 1.342 1.613h11.866c1.104 0 1.945-.007 1.945-1.112l-.028-3.418l.028-4.057z"></svg:path><svg:path fill="#a57939" d="M22 13.528C22 16.556 19.761 22 17 22s-5-5.444-5-8.472s2.239-2.491 5-2.491s5-.536 5 2.491"></svg:path><svg:path fill="#d0cfce" d="M44 14h5v5h-5z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m41 53.794l11-2.588"></svg:path><svg:path d="M38 21a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v37a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linejoin="round" d="M44 14h5v5h-5zm0 2h-6l-15 9h-6v-3"></svg:path><svg:path d="M22 13.528C22 16.556 19.761 22 17 22s-5-5.444-5-8.472s2.239-2.491 5-2.491s5-.536 5 2.491Z"></svg:path><svg:path stroke-linecap="round" d="M39 41h13"></svg:path></svg:g>`,
})
export class OpenmojiCoffeeGrinderIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
