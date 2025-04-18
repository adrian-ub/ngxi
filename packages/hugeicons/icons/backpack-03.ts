import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBackpack03Icon],svg[hugeicons-backpack-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 7.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C6.737 5 7.047 5 7.667 5h8.666c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185c0 1.24 0 1.86-.136 2.368a4 4 0 0 1-2.829 2.829c-.508.136-1.128.136-2.368.136h-3.334c-1.24 0-1.86 0-2.368-.136a4 4 0 0 1-2.829-2.829C5 9.527 5 8.907 5 7.667"></svg:path><svg:path d="M18 11c.372.584.557.876.689 1.19q.176.421.253.87c.058.336.058.682.058 1.374V16c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16v-1.566c0-.692 0-1.038.058-1.374a4 4 0 0 1 .253-.87c.132-.314.317-.606.689-1.19m-1 9c-.676 0-1.015 0-1.298-.078a2.06 2.06 0 0 1-1.36-1.179c-.11-.261-.143-.584-.21-1.228l-.065-.616c-.077-.737-.116-1.105.042-1.378c.352-.61 1.142-.516 1.748-.516H5M19 20c.677 0 1.015 0 1.298-.078a2.06 2.06 0 0 0 1.36-1.18c.11-.262.143-.585.21-1.23l.065-.617c.063-.598.22-1.332-.362-1.718C21.303 15 20.916 15 20.143 15H19m-10-.5v-1m6 1v-1M15 5a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class HugeiconsBackpack03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
