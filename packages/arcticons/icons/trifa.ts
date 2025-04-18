import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrifaIcon],svg[arcticons-trifa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.939 18.753c2.12-2.646 2.727-6.17.783-8.946a6.985 6.985 0 1 0-5.113 10.965a10.6 10.6 0 0 1-.597 2.699a29 29 0 0 0 4.927-4.718"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.687 13.813a9.313 9.313 0 1 1 18.626 0v5.821h6.403V43.5H8.284V19.634h6.403Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.016 33.022a6.985 6.985 0 1 1 13.97 0v6.636h-13.97Z"></svg:path><svg:circle cx="20.799" cy="30.403" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.201" cy="30.403" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.926 27.202l-1.165-1.747m9.314 1.747l1.164-1.747"></svg:path>`,
})
export class ArcticonsTrifaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
