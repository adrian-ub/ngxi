import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt55Icon],svg[circle-flags-it-55-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt550" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt550)"><svg:path fill="#6da544" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M152 72h208v384H152z"></svg:path><svg:path fill="#d80027" d="M232 136h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88h-48zm112-48h-48v48h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16zm-176 48h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88h-48z"></svg:path></svg:g>`,
})
export class CircleFlagsIt55Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
