import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMotion01Icon],svg[hugeicons-motion-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.513 12c-.401-.058-.72-.156-1-.317a3 3 0 0 1-1.108-1.108C2 9.873 2 8.93 2 7.044s0-2.829.405-3.53c.266-.46.648-.843 1.108-1.109C4.215 2 5.158 2 7.044 2s2.829 0 3.53.405c.46.266.843.648 1.109 1.108c.161.28.259.599.317 1"></svg:path><svg:path d="M9.522 17c-.406-.058-.727-.156-1.009-.319a3 3 0 0 1-1.108-1.107C7 14.87 7 13.929 7 12.044c0-1.886 0-2.829.405-3.531c.266-.46.648-.842 1.108-1.108C9.215 7 10.158 7 12.043 7c1.886 0 2.829 0 3.53.405c.46.266.843.648 1.108 1.108c.163.282.26.603.319 1.009"></svg:path><svg:path d="M12 17c0-1.87 0-2.804.402-3.5a3 3 0 0 1 1.098-1.098C14.196 12 15.13 12 17 12s2.804 0 3.5.402a3 3 0 0 1 1.098 1.098C22 14.196 22 15.13 22 17s0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C19.804 22 18.87 22 17 22s-2.804 0-3.5-.402a3 3 0 0 1-1.098-1.098C12 19.804 12 18.87 12 17"></svg:path></svg:g>`,
})
export class HugeiconsMotion01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
