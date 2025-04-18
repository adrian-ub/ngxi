import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaVideocamOutlineIcon],svg[cuida-videocam-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="videocam-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M6 5h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></svg:path><svg:path d="M20 14.887a.5.5 0 0 1-.832.373l-2-1.777a.5.5 0 0 1-.168-.374V10.83a.5.5 0 0 1 .172-.377l2-1.736a.5.5 0 0 1 .828.378v5.79Zm-4.139-5.944l2-1.735C19.482 5.803 22 6.953 22 9.096v5.79c0 2.158-2.549 3.302-4.16 1.87l-2-1.779A2.5 2.5 0 0 1 15 13.11v-2.28a2.5 2.5 0 0 1 .861-1.888Z"></svg:path></svg:g></svg:g>`,
})
export class CuidaVideocamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
