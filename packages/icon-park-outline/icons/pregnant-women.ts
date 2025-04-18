import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePregnantWomenIcon],svg[icon-park-outline-pregnant-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M33 4v7.519q10.968 6.291 9.906 16.742T33 44M13.772 4q-3.207.555-4.616 3.758C7.746 10.96 5 21.964 5 23.726s3.568 6.509 12.052 13.71c3.931 3.336 6.255 3.166 7.513.928s-.407-3.674-2.515-5.327c-3.863-3.029-8.948-7.822-8.948-9.926q0-2.104 3.95-12.824"></svg:path><svg:path d="M8.201 28.94a95 95 0 0 0 2.8 15M33 19.944q2.32 1.542 3 4.012q.68 2.472.396 4.506"></svg:path></svg:g>`,
})
export class IconParkOutlinePregnantWomenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
