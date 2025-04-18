import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsBox2Icon],svg[duo-icons-box-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.765 7.982l.022.19l.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095l-6.295 3.634l-.124.067l-.126.06v-8.99z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="m13.25 2.567l6.294 3.634q.076.044.148.092L12 10.838L4.308 6.293a3 3 0 0 1 .148-.092l6.294-3.634a2.5 2.5 0 0 1 2.5 0" class="duoicon-primary-layer"></svg:path><svg:path fill="currentColor" d="M3.235 7.982L11 12.571v8.988a2 2 0 0 1-.25-.126l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366q0-.195.03-.384z" class="duoicon-secondary-layer" opacity=".3"></svg:path>`,
})
export class DuoIconsBox2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
