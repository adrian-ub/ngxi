import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChurchIcon],svg[hugeicons-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2v4m2-2h-4M8.501 8.799L12 6l3.499 2.799C16.717 9.774 17 10.362 17 11.923V22H7V11.923c0-1.56.283-2.15 1.501-3.124M17 12l1.789.894c1.076.538 1.614.807 1.912 1.29c.299.484.299 1.085.299 2.288V20c0 .943 0 1.414-.293 1.707S19.943 22 19 22h-2M7 12l-1.789.894c-1.076.538-1.614.807-1.912 1.29C3 14.669 3 15.27 3 16.473V20c0 .943 0 1.414.293 1.707S4.057 22 5 22h2"></svg:path><svg:path d="M10 22v-4a2 2 0 1 1 4 0v4m-1.992-11h-.009"></svg:path></svg:g>`,
})
export class HugeiconsChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
