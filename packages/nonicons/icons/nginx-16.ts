import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsNginx16Icon],svg[nonicons-nginx-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.62.102a.76.76 0 0 1 .76 0l6.246 3.625a.75.75 0 0 1 .374.648v7.25a.75.75 0 0 1-.374.648L8.38 15.898a.76.76 0 0 1-.76 0l-6.246-3.625A.75.75 0 0 1 1 11.625v-7.25a.75.75 0 0 1 .374-.648zM2.508 4.806v6.388L8 14.382l5.492-3.188V4.806L8 1.618zm2.475-.249a.76.76 0 0 1 .822.163l4.241 4.22V5.25c0-.414.338-.75.754-.75s.754.336.754.75v5.5a.75.75 0 0 1-.466.693a.76.76 0 0 1-.821-.163L6.026 7.06v3.69c0 .414-.338.75-.754.75a.75.75 0 0 1-.754-.75v-5.5a.75.75 0 0 1 .465-.693"></svg:path>`,
})
export class NoniconsNginx16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
