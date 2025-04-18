import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSyringeCircleFilledIcon],svg[pepicons-pencil-syringe-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSyringeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M6.207 14.571a2 2 0 0 0 0 2.829l1.414 1.414a2 2 0 0 0 2.829 0l6.97-6.971a2 2 0 0 0 .586-1.46l-.032-1.407a2 2 0 0 0-1.978-1.955l-1.375-.014a2 2 0 0 0-1.435.585zm10.507-3.436l-6.971 6.972a1 1 0 0 1-1.415 0l-1.414-1.415a1 1 0 0 1 0-1.414L13.893 8.3a1 1 0 0 1 .718-.293l1.374.014a1 1 0 0 1 .99.978l.031 1.407a1 1 0 0 1-.292.73" clip-rule="evenodd"></svg:path><svg:path d="M12.52 15.107a.5.5 0 1 1-.706.707l-1.415-1.415a.5.5 0 1 1 .708-.707zm-5.956 5.657a.5.5 0 0 1-.707.707l-2.529-2.529a.5.5 0 1 1 .708-.707zm3.79-.118a.5.5 0 1 1-.708.707l-6-6a.5.5 0 1 1 .708-.707zm4.288-7.661a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 0 1 .707-.707z"></svg:path><svg:path d="m5 20.457l-.707-.707l2.457-2.457l.707.707zM19.854 4.354a.5.5 0 1 1 .707.707l-3 3a.5.5 0 1 1-.707-.707z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSyringeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSyringeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
