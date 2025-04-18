import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAnsibleIcon],svg[cib-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.156 15.297l6.25 4.927l-4.141-10.214zM16 0C7.161 0 0 7.161 0 16s7.161 16 16 16s16-7.161 16-16S24.839 0 16 0m7.729 23.073a1.136 1.136 0 0 1-1.167 1.109c-.313 0-.552-.12-.885-.391l-8.255-6.667l-2.771 6.938H8.255L15.25 7.255a1.05 1.05 0 0 1 1.021-.677c.432-.016.839.25.99.677l6.365 15.323c.057.151.104.313.104.464z"></svg:path>`,
})
export class CibAnsibleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
