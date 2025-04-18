import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibTrelloIcon],svg[cib-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 0H4C1.792 0 0 1.792 0 4v24c0 2.208 1.792 4 4 4h24c2.208 0 4-1.792 4-4V4c0-2.208-1.792-4-4-4M13.922 24.24A1.92 1.92 0 0 1 12 26.162H6.078a1.924 1.924 0 0 1-1.917-1.922V6.079c0-1.057.859-1.917 1.917-1.917H12c1.063 0 1.922.859 1.922 1.917zm13.917-8a1.923 1.923 0 0 1-1.917 1.922H20a1.924 1.924 0 0 1-1.922-1.922V6.079c0-1.057.865-1.917 1.922-1.917h5.922c1.057 0 1.917.859 1.917 1.917z"></svg:path>`,
})
export class CibTrelloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
