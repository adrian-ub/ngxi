import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiCloudIcon],svg[hugeicons-ai-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.478 9h.022a4.5 4.5 0 0 1 2.064 8.5M17.478 9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 9a5.5 5.5 0 0 1-1.235 3M6.52 8.023A5 5 0 0 0 4.818 17.5M6.52 8.023Q6.757 8 7 8c1.126 0 2.165.372 3 1m2 5l.258.697c.338.914.507 1.371.84 1.704c.334.334.791.503 1.705.841l.697.258l-.697.258c-.914.338-1.371.507-1.704.84c-.334.334-.503.791-.841 1.705L12 21l-.258-.697c-.338-.914-.507-1.371-.84-1.704c-.334-.334-.791-.503-1.705-.841L8.5 17.5l.697-.258c.914-.338 1.371-.507 1.704-.84c.334-.334.503-.791.841-1.705z" color="currentColor"></svg:path>`,
})
export class HugeiconsAiCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
