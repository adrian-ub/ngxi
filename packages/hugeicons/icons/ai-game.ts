import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiGameIcon],svg[hugeicons-ai-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.002 7.5c-.876.143-1.52.405-2.043.887c-1.145 1.056-1.305 2.802-1.624 6.293l-.327 3.567c-.124 1.758 1.25 3.253 2.991 3.253h.747a3 3 0 0 0 2.784-1.909l.742-1.879c.244-.616.366-.925.62-1.099s.582-.174 1.238-.174h1.74c.656 0 .984 0 1.238.174s.376.483.62 1.1l.742 1.878a3 3 0 0 0 2.784 1.909h.747c1.74 0 3.115-1.495 2.991-3.253l-.323-3.562c-.318-3.493-.477-5.24-1.622-6.297c-.523-.483-1.168-.745-2.045-.888M17 12.5h.009M7 12.5h.009"></svg:path><svg:path d="m11.998 2.5l.258.697c.338.914.507 1.371.84 1.704c.334.334.791.503 1.705.841l.697.258l-.697.258c-.914.338-1.371.507-1.704.84c-.334.334-.503.791-.841 1.705l-.258.697l-.258-.697c-.338-.914-.507-1.371-.84-1.704c-.334-.334-.79-.503-1.705-.841L8.498 6l.697-.258c.914-.338 1.371-.507 1.704-.84c.334-.334.503-.791.841-1.705z"></svg:path></svg:g>`,
})
export class HugeiconsAiGameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
