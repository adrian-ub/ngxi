import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biStackOverflowIcon],svg[bi-stack-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z"></svg:path><svg:path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0L9.108.852l4.26 5.727l1.146-.852zm-3.54 3.377l5.484 4.567l.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013l.603-1.294l-6.47-3.013zm-.925 3.344l6.985 1.469l.294-1.398l-6.985-1.468z"></svg:path></svg:g>`,
})
export class BiStackOverflowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
