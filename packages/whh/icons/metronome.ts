import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMetronomeIcon],svg[whh-metronome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m65 1024l79-550L6 242q-8-12-4-25.5T18.5 196t26-3.5T65 208l94 158l34-238L417 0l224 128l128 896zm96-192h195L200 569zm416-640L417 64L257 192l-41 271l169 283V160q0-13 9.5-22.5T417 128t22.5 9.5T449 160v672h224z"></svg:path>`,
})
export class WhhMetronomeIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
