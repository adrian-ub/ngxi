import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedal03Icon],svg[hugeicons-medal-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.53 13.638C11.247 13.213 11.606 13 12 13s.752.213 1.47.638l1 .591c.747.441 1.12.662 1.325 1.031s.205.819.205 1.719v1.042c0 .9 0 1.35-.205 1.719s-.578.59-1.324 1.03l-1 .592c-.719.426-1.078.638-1.471.638s-.752-.212-1.47-.638l-1-.591c-.747-.441-1.12-.662-1.325-1.031S8 18.921 8 18.021v-1.042c0-.9 0-1.35.205-1.719s.578-.59 1.324-1.03zm6.729-11.626H6.74c-.81 0-1.881-.158-2.435.684C4 3.161 4 3.833 4 5.178c0 1.147 0 1.72.206 2.204c.352.825 1.14 1.183 1.814 1.573l3.297 1.904C10.633 11.62 11.292 12 12 12s1.367-.38 2.683-1.14l3.297-1.905c.674-.39 1.462-.748 1.814-1.573C20 6.899 20 6.325 20 5.178c0-1.345 0-2.017-.306-2.482c-.553-.842-1.625-.684-2.435-.684M12 2v5" color="currentColor"></svg:path>`,
})
export class HugeiconsMedal03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
