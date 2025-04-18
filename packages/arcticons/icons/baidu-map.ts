import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBaiduMapIcon],svg[arcticons-baidu-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.886 22.647c-2.906-4.643-.813-12.473 3.618-15.691a12.47 12.47 0 0 1 14.862 0c4.733 3.622 6.612 10.908 3.706 15.55L23.935 40.302ZM17.111 43.5h13.8"></svg:path><svg:circle cx="24.012" cy="17.947" r="5.531" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBaiduMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
