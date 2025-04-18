import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHtml5Icon],svg[cib-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h28l-2.547 28.75L15.969 32L4.552 28.75zm9.375 13l-.307-3.625l13.411.005l.307-3.495L7.213 5.88l.932 10.682h12.167l-.432 4.568L16 22.198l-3.938-1.078l-.255-2.813H8.328l.443 5.563L16 25.802l7.172-1.927l.99-10.875z"></svg:path>`,
})
export class CibHtml5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
