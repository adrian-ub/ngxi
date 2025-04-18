import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGavelIcon],svg[icon-park-twotone-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGavel0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11.075 37.08c-3.386 1.46-5.039 3.444-5.71 4.83c-.266.548.181 1.09.79 1.09h21.232c.742 0 1.212-.776.779-1.38c-1.75-2.438-4.384-3.977-5.777-4.552a.9.9 0 0 0-.357-.068h-10.57a1 1 0 0 0-.387.08"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="m14.732 18.856l5-8.66l8.66 5l-5 8.66z"></svg:path><svg:path fill="#fff" d="m27.392 16.928l1-1.732a2 2 0 0 0-2.732.732zm-3 5.196l-1.732-1a2 2 0 0 0 .732 2.732zm2-3.464l12.99 7.5l2-3.464l-12.99-7.5zm11.99 9.232l-12.99-7.5l-2 3.464l12.99 7.5zm-12.258-4.768l3-5.196l-3.464-2l-3 5.196zm13.625 4.402a1 1 0 0 1-1.367.366l-2 3.464a5 5 0 0 0 6.83-1.83zm-.367-1.366a1 1 0 0 1 .367 1.366l3.464 2a5 5 0 0 0-1.83-6.83z"></svg:path><svg:rect width="14" height="6" x="21" y="4" fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3" transform="rotate(30 21 4)"></svg:rect><svg:rect width="14" height="6" x="13" y="17.856" fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3" transform="rotate(30 13 17.856)"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGavel0)"></svg:path>`,
})
export class IconParkTwotoneGavelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
