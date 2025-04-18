import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiVideoSlashIcon],svg[mynaui-video-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.168 6.991l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374M3 15.75v-7.5a2 2 0 0 1 2-2h8.5M3 21l3.25-3.25M21 3l-5.5 5.5m0 0v7.25a2 2 0 0 1-2 2H6.25M15.5 8.5l-9.25 9.25"></svg:path>`,
})
export class MynauiVideoSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
