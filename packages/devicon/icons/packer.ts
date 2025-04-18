import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPackerIcon],svg[devicon-packer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1daeff" d="M66.354 39.617V128l-41.482-23.963v-88.39Zm0 0"></svg:path><svg:path fill="#1d94dd" d="M86.893 25.975L41.801 0v18.044L72.46 35.75v54.119l14.433 8.269c8.934 5.158 16.236 2.066 16.236-6.863V51.592c0-8.933-7.302-20.459-16.235-25.617zm0 0"></svg:path>`,
})
export class DeviconPackerIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
