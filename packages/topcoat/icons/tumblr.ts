import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatTumblrIcon],svg[topcoat-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.83 29.38c-.21-.19-.33-.739-.33-.88v-11h7v-4h-7v-6h-4c-.28 3.33-.83 6-5 6v4h3c0 4.17-.05 8.55-.05 12.24c0 1.74 1 3.24 2.409 4.039c1.32.681 1.681 1.051 3.051 1.131c1.51.07 3.17-.01 4.46-.16c1.14-.18 2.37-.65 3.2-1.13V28.8v.04c0 .37-1.021.61-1.7.86c-1.14.38-3.85.87-5.04-.32M40.5 1.5v39h-39v-39z"></svg:path>`,
})
export class TopcoatTumblrIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
