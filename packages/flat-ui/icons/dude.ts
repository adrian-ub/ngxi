import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiDudeIcon],svg[flat-ui-dude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#5FCCFF" opacity=".6"></svg:circle><svg:path fill="#D35400" fill-rule="evenodd" d="M74 62H26a5 5 0 0 1-5-5V39c0-3.866 3.134-6 7-6h44c3.866 0 7 2.134 7 6v18a5 5 0 0 1-5 5" clip-rule="evenodd"></svg:path><svg:path fill="#DF9274" fill-rule="evenodd" d="M50 17c14.359 0 26 11.641 26 26v21c0 14.359-11.641 26-26 26S24 78.359 24 64V43c0-14.359 11.641-26 26-26" clip-rule="evenodd"></svg:path><svg:path fill="#3498DB" d="M40 55.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5"></svg:path><svg:path fill="#fff" d="M40 48c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-3a6 6 0 0 0 0 12a6 6 0 0 0 0-12"></svg:path><svg:path fill="#3498DB" d="M60 55.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5"></svg:path><svg:path fill="#fff" d="M60 48c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-3a6 6 0 0 0 0 12a6 6 0 0 0 0-12"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#C27A5E" stroke-miterlimit="10" stroke-width="2" d="M61 70c0 5.523-4.925 10-11 10s-11-4.477-11-10z" clip-rule="evenodd"></svg:path><svg:path fill="#D35400" fill-rule="evenodd" d="M50 9c16.016 0 29 13.984 29 30c-7.438 0-16-13-16-13S39.616 39 21 39C21 22.984 33.984 9 50 9" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiDudeIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
