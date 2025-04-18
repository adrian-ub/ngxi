import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTrophyCircleFilledIcon],svg[pepicons-pencil-trophy-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTrophyCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.693 6.25H9.307a1 1 0 0 0-.99 1.142l.637 4.45q.015.113.062.216c1.554 3.421 6.414 3.421 7.967 0a.8.8 0 0 0 .063-.216l.637-4.45a1 1 0 0 0-.99-1.142m-7.386-1a2 2 0 0 0-1.98 2.283l.637 4.451q.037.253.142.487c1.909 4.204 7.88 4.204 9.788 0q.105-.234.142-.487l.637-4.45a2 2 0 0 0-1.98-2.284z"></svg:path><svg:path d="M12.5 17.75v-2.5h1v2.5z"></svg:path><svg:path d="m16.086 19.75l-.793-.793a3.243 3.243 0 0 0-4.586 0l-.793.793zM16 18.25a4.243 4.243 0 0 0-6 0l-.793.793c-.63.63-.184 1.707.707 1.707h6.172c.89 0 1.337-1.077.707-1.707zM8 8a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h2.5A.5.5 0 0 1 8 8"></svg:path><svg:path d="M8.429 12.495c-2.151-.31-3.774-2.123-3.916-4.276l-.012-.186a.5.5 0 0 1 .998-.066l.012.186c.112 1.697 1.391 3.112 3.06 3.352zM18 8a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 0-1h-2.5a.5.5 0 0 0-.5.5"></svg:path><svg:path d="M17.571 12.495c2.114-.304 3.77-1.946 3.906-4.116l.022-.348a.5.5 0 0 0-.998-.062l-.022.347c-.103 1.66-1.366 2.947-3.05 3.19z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTrophyCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTrophyCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
