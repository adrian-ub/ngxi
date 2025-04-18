import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardChecklist2Icon],svg[marketeq-clipboard-checklist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 6.25h-25c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.932-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" d="m18.75 29.167l4.167 4.166L31.25 25m-12.5-12.5a2.083 2.083 0 0 0 2.083 2.083h8.334A2.083 2.083 0 0 0 31.25 12.5V6.25h-12.5z"></svg:path></svg:g>`,
})
export class MarketeqClipboardChecklist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
