import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedal01Icon],svg[hugeicons-medal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 2v8.5m7-8.5v8.5m2.416-8.488H6.084c-.911 0-2.117-.158-2.74.684C3 3.161 3 3.833 3 5.178c0 1.147 0 1.72.232 2.204c.396.825 1.282 1.183 2.04 1.573l3.71 1.904C10.461 11.62 11.202 12 12 12s1.537-.38 3.019-1.14l3.708-1.905c.76-.39 1.645-.748 2.041-1.573C21 6.899 21 6.325 21 5.178c0-1.345 0-2.017-.344-2.482c-.623-.842-1.829-.684-2.74-.684M10.53 13.638C11.247 13.213 11.606 13 12 13s.752.213 1.47.638l1 .591c.747.441 1.12.662 1.325 1.031s.205.819.205 1.719v1.042c0 .9 0 1.35-.205 1.719s-.578.59-1.324 1.03l-1 .592c-.719.426-1.078.638-1.471.638s-.752-.212-1.47-.638l-1-.591c-.747-.441-1.12-.662-1.325-1.031S8 18.921 8 18.021v-1.042c0-.9 0-1.35.205-1.719s.578-.59 1.324-1.03z" color="currentColor"></svg:path>`,
})
export class HugeiconsMedal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
