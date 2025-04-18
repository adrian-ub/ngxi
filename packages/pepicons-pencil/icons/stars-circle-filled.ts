import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilStarsCircleFilledIcon],svg[pepicons-pencil-stars-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilStarsCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M12 3.5a.5.5 0 0 1 .479.354l1.928 6.333l5.765 2.107a.5.5 0 0 1 .013.934l-5.727 2.275l-1.979 6.64a.5.5 0 0 1-.958 0l-1.979-6.64l-5.727-2.275a.5.5 0 0 1 .013-.934l5.765-2.107l1.929-6.333A.5.5 0 0 1 12 3.5m0 2.216l-1.523 5a.5.5 0 0 1-.307.325l-4.767 1.742l4.734 1.88a.5.5 0 0 1 .294.322l1.57 5.264l1.568-5.264a.5.5 0 0 1 .294-.322l4.734-1.88l-4.767-1.742a.5.5 0 0 1-.307-.324z" clip-rule="evenodd"></svg:path><svg:path d="M19.75 22.12c-.1 0-.19-.08-.2-.18c-.18-1.82-.32-2.4-1.99-2.56c-.1-.01-.18-.1-.18-.2s.08-.19.18-.2c1.71-.16 1.81-.6 1.99-2.42c0-.1.1-.18.2-.18s.19.08.2.18c.18 1.82.29 2.26 1.99 2.42c.1.01.18.1.18.2s-.08.19-.18.2c-1.68.16-1.81.74-1.99 2.57c0 .1-.09.18-.2.18z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilStarsCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilStarsCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
