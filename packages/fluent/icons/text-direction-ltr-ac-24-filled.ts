import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionLtrAc24FilledIcon],svg[fluent-text-direction-ltr-ac-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M12 5a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2h-1V5zM4 5a1 1 0 1 0 0 2h3v.25c0 .895-.184 1.87-.642 2.586C5.939 10.489 5.255 11 4 11a1 1 0 1 0 0 2c1.945 0 3.26-.864 4.042-2.086C8.784 9.756 9 8.354 9 7.25V6a1 1 0 0 0-1-1H4zm14.293 9.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H5a1 1 0 1 1 0-2h13.586l-.293-.293a1 1 0 0 1 0-1.414zm1.414-8a1 1 0 1 0-1.414 1.414l.293.293H16a1 1 0 1 0 0 2h2.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionLtrAc24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
