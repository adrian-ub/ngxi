import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaMediaIncompleteIcon],svg[nrk-media-media-incomplete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12" clip-rule="evenodd" opacity=".5"></svg:path><svg:path d="m15.293 7.293l-8 8l1.414 1.414l8-8z"></svg:path><svg:path d="m8.707 7.293l8 8l-1.414 1.414l-8-8z"></svg:path></svg:g>`,
})
export class NrkMediaMediaIncompleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
