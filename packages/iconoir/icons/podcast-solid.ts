import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPodcastSolidIcon],svg[iconoir-podcast-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="iconoirPodcastSolid0" stroke="currentColor" d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8"></svg:path></svg:defs><svg:g fill="none"><svg:use href="#iconoirPodcastSolid0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:use><svg:use href="#iconoirPodcastSolid0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:use><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.528 15a6 6 0 1 1 8.944 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 11a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.078 21.487a2.75 2.75 0 0 1-2.713 2.297h-.611a2.75 2.75 0 0 1-2.713-2.297l-.509-3.054c-.24-1.438.899-2.548 2.002-3.283c1.378-.919 1.852-.81 3.05-.01c1.058.704 2.242 1.855 2.002 3.293z"></svg:path></svg:g>`,
})
export class IconoirPodcastSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
