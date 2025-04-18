import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEdit2Icon],svg[tdesign-edit-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.428 1.963l5.61 5.61L7.61 22.001H2v-5.61zm0 2.828l-2.782 2.782l2.781 2.782l2.782-2.782zm-1.415 6.978l-2.782-2.782L4 17.22V20h2.782zm7.212 10.232h-9.543v-2h9.543z"></svg:path>`,
})
export class TdesignEdit2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
