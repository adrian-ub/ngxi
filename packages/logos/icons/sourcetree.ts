import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSourcetreeIcon],svg[logos-sourcetree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosSourcetree0" x1="49.928%" x2="49.928%" y1="90.721%" y2="36.288%"><svg:stop offset="18%" stop-color="#0052CC"></svg:stop><svg:stop offset="100%" stop-color="#2684FF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#2684FF" d="M255.462 127.52C255.462 57.094 198.369 0 127.942 0C65.17-.089 11.677 45.531 1.855 107.528s26.949 121.917 86.672 141.236v63.895a8.97 8.97 0 0 0 8.968 8.968h60.532a8.97 8.97 0 0 0 8.968-8.968v-63.85c52.674-16.961 88.406-65.95 88.466-121.288m-127.52 43.09c-23.811 0-43.113-19.301-43.113-43.112c0-23.81 19.302-43.112 43.112-43.112s43.112 19.302 43.112 43.112s-19.302 43.113-43.112 43.113"></svg:path><svg:path fill="url(#logosSourcetree0)" d="M127.941 0v84.43c23.81 0 43.112 19.302 43.112 43.112s-19.302 43.112-43.112 43.112a39.413 39.413 0 0 1 39.413 39.414v38.785c59.746-19.322 96.533-79.262 86.71-141.281C244.243 45.553 190.735-.085 127.942 0"></svg:path>`,
})
export class LogosSourcetreeIcon {
  readonly viewBox = input("0 0 256 322")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
