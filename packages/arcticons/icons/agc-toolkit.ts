import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAgcToolkitIcon],svg[arcticons-agc-toolkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.2 33.436h17.935c1.864 0 3.365-1.5 3.365-3.365v-13.81c0-1.864-1.5-3.365-3.365-3.365h-1.67l-1.657-3.538h-7.436l-1.66 3.538h-14.98a3.357 3.357 0 0 0-3.365 3.365v7.228"></svg:path><svg:circle cx="33.548" cy="23.196" r="7.501" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="rotate(-89.932 33.548 23.196)"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.62 30.175q.06-.456.064-.916a8 8 0 0 0-.064-.916l1.984-1.554a.46.46 0 0 0 .114-.6l-1.878-3.258a.46.46 0 0 0-.573-.201l-2.341.944a7.2 7.2 0 0 0-1.585-.917l-.353-2.488a.46.46 0 0 0-.459-.394h-3.766a.46.46 0 0 0-.458.394l-.353 2.488a7 7 0 0 0-1.585.917l-2.35-.944a.46.46 0 0 0-.573.201L4.565 26.19c-.12.2-.07.459.115.6l1.98 1.553q-.06.456-.065.917q.004.46.064.916l-1.98 1.553a.46.46 0 0 0-.114.6l1.879 3.258a.46.46 0 0 0 .573.202l2.34-.944a7.2 7.2 0 0 0 1.586.916l.353 2.488a.46.46 0 0 0 .458.394h3.757a.46.46 0 0 0 .458-.394l.353-2.488a7 7 0 0 0 1.585-.916l2.342.944c.214.087.46 0 .572-.202L22.7 32.33c.12-.2.07-.459-.115-.6z"></svg:path><svg:circle cx="13.642" cy="29.259" r="2.724" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAgcToolkitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
