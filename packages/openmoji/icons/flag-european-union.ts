import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagEuropeanUnionIcon],svg[openmoji-flag-european-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m35.105 26.794l.919-2.695l.792 2.654l-2.2-1.599l2.768-.067zm0 21.107l.919-2.695l.792 2.653l-2.2-1.598l2.768-.067zm-9.012-15.979l.918-2.695l.793 2.653l-2.201-1.598l2.768-.067zm18.278 10.553l.919-2.695l.792 2.654l-2.2-1.599l2.768-.067zM29.838 28.242l.919-2.695l.792 2.653l-2.201-1.598l2.768-.067zM40.391 46.52l.919-2.694l.792 2.653l-2.201-1.599l2.769-.066zm5.268-9.173l.919-2.694l.792 2.653l-2.201-1.599l2.768-.066zm-21.107 0l.919-2.694l.792 2.653l-2.2-1.599l2.768-.066zm15.729-9.131l.919-2.694l.792 2.653l-2.2-1.599l2.768-.066zM29.728 46.495l.919-2.695l.792 2.654l-2.201-1.599l2.769-.067zM44.13 31.886l.918-2.695l.793 2.654l-2.201-1.599l2.768-.067zM25.851 42.439l.919-2.694l.792 2.653l-2.201-1.599l2.768-.066z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagEuropeanUnionIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
