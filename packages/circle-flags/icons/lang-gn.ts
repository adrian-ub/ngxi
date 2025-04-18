import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangGnIcon],svg[circle-flags-lang-gn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangGn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangGn0)"><svg:path fill="#eee" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0Z"></svg:path><svg:path fill="#0052b4" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#333" d="M256 80A176 176 0 0 0 80 256a176 176 0 0 0 176 176a176 176 0 0 0 176-176A176 176 0 0 0 256 80m0 16a160 160 0 0 1 160 160a160 160 0 0 1-160 160A160 160 0 0 1 96 256A160 160 0 0 1 256 96m0 7a32 32 0 0 0-32 32a32 32 0 0 0 20 30v28a64 64 0 0 0-24 10l-20-20a32 32 0 0 0-7-35a32 32 0 0 0-23-10a32 32 0 0 0-22 10a32 32 0 0 0 0 45a32 32 0 0 0 35 7l20 20a64 64 0 0 0-10 24h-29a32 32 0 0 0-29-20a32 32 0 0 0-32 32a32 32 0 0 0 32 32a32 32 0 0 0 29-20h29a64 64 0 0 0 10 24l-20 20a32 32 0 0 0-35 7a32 32 0 0 0 0 45a32 32 0 0 0 45 0a32 32 0 0 0 7-35l20-20a64 64 0 0 0 24 10v28a32 32 0 0 0-20 30a32 32 0 0 0 32 32a32 32 0 0 0 32-32a32 32 0 0 0-20-30v-28a64 64 0 0 0 24-10l20 20a32 32 0 0 0 7 35a32 32 0 0 0 45 0a32 32 0 0 0 0-45a32 32 0 0 0-35-7l-20-20a64 64 0 0 0 10-24h28a32 32 0 0 0 30 20a32 32 0 0 0 32-32a32 32 0 0 0-32-32a32 32 0 0 0-30 20h-28a64 64 0 0 0-10-24l20-20a32 32 0 0 0 35-7a32 32 0 0 0 0-45a32 32 0 0 0-22-10a32 32 0 0 0-23 10a32 32 0 0 0-7 35l-20 20a64 64 0 0 0-24-10v-28a32 32 0 0 0 20-30a32 32 0 0 0-32-32m0 105a48 48 0 0 1 48 48a48 48 0 0 1-48 48a48 48 0 0 1-48-48a48 48 0 0 1 48-48m0 16a32 32 0 0 0-32 32a32 32 0 0 0 32 32a32 32 0 0 0 32-32a32 32 0 0 0-32-32"></svg:path></svg:g>`,
})
export class CircleFlagsLangGnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
