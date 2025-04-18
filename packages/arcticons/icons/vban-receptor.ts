import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVbanReceptorIcon],svg[arcticons-vban-receptor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="37" height="37" x="5.5" y="5.5" rx="4" ry="4"></svg:rect><svg:path d="M5.5 18.101h37M9.251 38.95h1.967m-1.967-1.967h1.967m-1.967-1.967h1.967m1.966 0h1.967m-1.967 1.967h1.967m-1.967 1.967h1.967m-1.967-5.9h1.967m-1.967-1.967h1.967m1.966 0h1.967m-1.967 1.967h1.967m-1.967 1.966h1.967m-1.967 1.967h1.967m-1.967 1.967h1.967m1.966 0h1.967m-1.967-1.967h1.967m-1.967-1.967h1.967M21.05 33.05h1.967m-1.967-1.967h1.967m-1.967-1.966h1.967m1.966 0h1.967m-1.967-1.967h1.967m-1.967-1.966h1.967m1.966 0h1.967m-1.967-1.967h1.967m1.966 1.967h1.967m1.966 5.899h1.967m-1.967 1.967h1.967m-1.967 1.966h1.967m-1.967 1.967h1.967m-1.967 1.967h1.967m-5.9 0h1.967m-1.967-1.967h1.967m-1.967-1.967h1.967m-1.967-1.966h1.967m-1.967-1.967h1.967m-1.967-1.966h1.967m-1.967-1.967h1.967m-5.9 0h1.967m-1.967 1.967h1.967m-1.967 1.966h1.967m-1.967 1.967h1.967m-1.967 1.966h1.967m-1.967 1.967h1.967m-1.967 1.967h1.967m-5.9 0h1.967m-1.967-1.967h1.967m-1.967-1.967h1.967m-1.967-1.966h1.967m-1.967-1.967h1.967"></svg:path></svg:g>`,
})
export class ArcticonsVbanReceptorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
