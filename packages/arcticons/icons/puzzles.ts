import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPuzzlesIcon],svg[arcticons-puzzles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.18 9.2h6.09v6.09h-6.09zM20.96 20.95h6.09v6.09h-6.09zm11.22 11.97h6.09v6.09h-6.09zm0-20.67H12.77m0 23.71V12.25m19.41 23.71H12.77M24 20.95v-8.7m14.27 0h4.23m-7.27 17.18V18.57"></svg:path>`,
})
export class ArcticonsPuzzlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
