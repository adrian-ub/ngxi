import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpikedshoesIcon],svg[icon-park-solid-spikedshoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSpikedshoes0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#fff" d="M44 6H28v8h16z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M44 14v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6z"></svg:path><svg:path stroke="#000" d="M14 26v-6m7 6v-6"></svg:path><svg:path stroke="#fff" d="M15 42v-4m-7 4v-4m14 4v-4m12 4v-4m7 4v-4M23 20H12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSpikedshoes0)"></svg:path>`,
})
export class IconParkSolidSpikedshoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
