import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLitterInBinSignIcon],svg[twemoji-litter-in-bin-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4z"></svg:path><svg:ellipse cx="23" cy="7.5" fill="#FFF" rx="3" ry="3.5"></svg:ellipse><svg:path fill="#FFF" d="M29 13s0-2-2-2h-7c-1 0-2 1-2 1l-2 2h-4s-1 0-1 1s1 1 1 1h5l2-2v17s0 1 1 1h1s1 0 1-1v-8s0-1 1-1s1 1 1 1v8s0 1 1 1h1s1 0 1-1v-9s2 0 2-2z"></svg:path><svg:path fill="#FFF" d="M6 22s-1 0-1-1s1-1 1-1s2 0 2 2v8h6v-8c0-2 2-2 2-2s1 0 1 1s-1 1-1 1v8s0 2-2 2H8s-2 0-2-2z"></svg:path><svg:circle cx="11" cy="20" r="2" fill="#FFF"></svg:circle>`,
})
export class TwemojiLitterInBinSignIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
