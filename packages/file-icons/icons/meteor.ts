import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMeteorIcon],svg[file-icons-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 4.991l438.476 464.452s14.938 10.536 26.361-1.756s2.636-24.584 2.636-24.584zM138.836 48.89l333.909 359.972s14.938 10.536 26.361-1.756s2.636-24.584 2.636-24.584zM41.3 142.834l333.909 359.972s14.938 10.536 26.361-1.756s2.636-24.584 2.636-24.584zm214.904-56.19l233.282 251.491s10.437 7.361 18.417-1.227s1.841-17.175 1.841-17.175L256.202 86.644zM73.433 251.703l233.283 251.491s10.437 7.361 18.417-1.227s1.841-17.175 1.841-17.175zm302.654-110.625l105.731 114.331s5.163 3.449 9.111-.575s.911-8.048.911-8.048zM131.806 367.597l105.732 114.331s5.162 3.449 9.111-.575s.911-8.048.911-8.048z"></svg:path>`,
})
export class FileIconsMeteorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
