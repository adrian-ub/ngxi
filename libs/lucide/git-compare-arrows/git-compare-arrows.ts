import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGitCompareArrows],svg[lucide-git-compare-arrows]',
  host: {
    class: 'lucide lucide-git-compare-arrows',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="5" cy="6" r="3" />
    <svg:path d="M12 6h5a2 2 0 0 1 2 2v7" />
    <svg:path d="m15 9-3-3 3-3" />
    <svg:circle cx="19" cy="18" r="3" />
    <svg:path d="M12 18H7a2 2 0 0 1-2-2V9" />
    <svg:path d="m9 15 3 3-3 3" />
  `,
})
export class LucideGitCompareArrows {}
