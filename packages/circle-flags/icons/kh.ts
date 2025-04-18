import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsKhIcon],svg[circle-flags-kh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsKh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsKh0)"><svg:path fill="#0052b4" d="M0 0h512v133.7l-39 121.6l39 123.2V512H0V378.5L34.2 255L0 133.7z"></svg:path><svg:path fill="#d80027" d="M0 133.7h512v244.8H0z"></svg:path><svg:path fill="#eee" d="M345 306.1v-33.3h-22.2v-44.5L300.5 206l-22.2 22.3v-44.5L256 161.5l-22.3 22.3v44.5L211.5 206l-22.3 22.3v44.5H167v33.4h-22.3v33.4h222.6v-33.5z"></svg:path></svg:g>`,
})
export class CircleFlagsKhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
