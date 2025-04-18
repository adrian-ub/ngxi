import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNoSmokingCircleIcon],svg[iconoir-no-smoking-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12v3m0-6c0-1-.714-2-2.143-2v0A2.857 2.857 0 0 1 10 4.143V3m8 6V4m0 8v3"></svg:path><svg:path d="M15 15H6.6a.6.6 0 0 1-.6-.6v-1.8a.6.6 0 0 1 .6-.6H12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5 5l14 14m-7 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirNoSmokingCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
