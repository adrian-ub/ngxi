import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUv01Icon],svg[hugeicons-uv-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.04 10.368c-1.115-.574-1.28-1.03-.908-2.192c.196-.61.786-1.784.343-2.409c-.581-.819-1.936-.128-2.651.1c-1.194.383-1.633.177-2.192-.907C13.312 4.338 12.88 3 12 3s-1.312 1.338-1.632 1.96c-.559 1.084-.998 1.29-2.192.908c-.715-.229-2.07-.92-2.65-.1c-.444.624.146 1.797.342 2.408c.372 1.162.207 1.618-.908 2.192C4.338 10.688 3 11.12 3 12s1.338 1.312 1.96 1.632c1.115.575 1.28 1.03.908 2.192c-.213.667-.855 1.92-.23 2.542c.622.62 1.873-.021 2.538-.234c1.194-.382 1.633-.176 2.192.908c.32.622.752 1.96 1.632 1.96s1.312-1.338 1.632-1.96c.559-1.084.998-1.29 2.192-.908c.665.213 1.916.854 2.538.233c.625-.622-.016-1.874-.23-2.541c-.372-1.162-.207-1.617.908-2.192c.622-.32 1.96-.752 1.96-1.632s-1.338-1.312-1.96-1.632" color="currentColor"></svg:path>`,
})
export class HugeiconsUv01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
